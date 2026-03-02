import { create } from 'zustand';
import { Course, mockCourses, Student, mockStudents } from './mockData';

interface AppState {
    isLoggedIn: boolean;
    userRole: 'student' | 'admin' | null;
    user: Student | null;
    courses: Course[];
    students: Student[];

    // Actions
    login: (email: string, password?: string) => void;
    logout: () => void;
    addCourse: (course: Course) => void;
    updateCourse: (id: string, updatedCourse: Partial<Course>) => void;
    deleteCourse: (id: string) => void;
    enrollUser: (courseId: string, studentInfo: Partial<Student>) => void;
}

export const useStore = create<AppState>((set, get) => ({
    isLoggedIn: false,
    userRole: null,
    user: null,
    courses: [...mockCourses],
    students: [...mockStudents],

    login: (email: string) => {
        // Mock login logic
        if (email === 'admin@mczeal.com') {
            set({ isLoggedIn: true, userRole: 'admin', user: null });
        } else {
            // Find or create student
            let student = get().students.find(s => s.email === email);
            if (!student) {
                student = {
                    id: `stu-${Date.now()}`,
                    name: email.split('@')[0], // mock name
                    email,
                    enrolledCourseIds: [],
                    paymentStatus: 'Pending',
                };
                set({ students: [...get().students, student] });
            }
            set({ isLoggedIn: true, userRole: 'student', user: student });
        }
    },

    logout: () => {
        set({ isLoggedIn: false, userRole: null, user: null });
    },

    addCourse: (course) => {
        set((state) => ({ courses: [...state.courses, course] }));
    },

    updateCourse: (id, updatedCourse) => {
        set((state) => ({
            courses: state.courses.map((c) => (c.id === id ? { ...c, ...updatedCourse } : c)),
        }));
    },

    deleteCourse: (id) => {
        set((state) => ({
            courses: state.courses.filter((c) => c.id !== id),
        }));
    },

    enrollUser: (courseId, studentInfo) => {
        const currentState = get();
        let student = currentState.user;

        // If not logged in but purchasing, mock a student creation
        if (!student) {
            if (!studentInfo.email) return;
            student = currentState.students.find(s => s.email === studentInfo.email) || null;
            if (!student) {
                student = {
                    id: `stu-${Date.now()}`,
                    name: studentInfo.name || 'New Student',
                    email: studentInfo.email,
                    enrolledCourseIds: [courseId],
                    paymentStatus: 'Completed'
                };
                set((state) => ({ students: [...state.students, student as Student] }));
            } else {
                const updatedStudent = {
                    ...student,
                    enrolledCourseIds: [...new Set([...student.enrolledCourseIds, courseId])],
                    paymentStatus: 'Completed' as const
                };
                set((state) => ({
                    students: state.students.map(s => s.id === student?.id ? updatedStudent : s)
                }));
            }
        } else {
            // already logged in, update existing user
            const updatedUser = {
                ...student,
                enrolledCourseIds: [...new Set([...student.enrolledCourseIds, courseId])],
                paymentStatus: 'Completed' as const
            };
            set((state) => ({
                user: updatedUser,
                students: state.students.map(s => s.id === updatedUser.id ? updatedUser : s)
            }));
        }
    }
}));

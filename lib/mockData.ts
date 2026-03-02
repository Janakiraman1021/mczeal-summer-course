export interface Course {
    id: string;
    name: string;
    originalPrice: number;
    offerPrice: number;
    duration: string;
    time: string;
    publicSyllabus: string[];
    fullSyllabus: string[];
}

export const mockCourses: Course[] = [
    {
        id: "python-kids",
        name: "Python for Kids",
        originalPrice: 7000,
        offerPrice: 5000,
        duration: "1 Month",
        time: "2 Hours per Day",
        publicSyllabus: ["Basics of Python"],
        fullSyllabus: ["Variables", "Loops", "Functions", "Mini Projects"],
    },
    {
        id: "data-analytics",
        name: "Data Analytics",
        originalPrice: 15000,
        offerPrice: 5000,
        duration: "1 Month",
        time: "2 Hours per Day",
        publicSyllabus: ["Overview of Data Analytics"],
        fullSyllabus: ["Advanced Python", "Advanced Excel", "SQL", "Power BI"],
    },
];

export interface Student {
    id: string;
    name: string;
    email: string;
    enrolledCourseIds: string[];
    paymentStatus: "Pending" | "Completed";
}

export const mockStudents: Student[] = [
    {
        id: "stu-001",
        name: "John Doe",
        email: "john@example.com",
        enrolledCourseIds: ["python-kids"],
        paymentStatus: "Completed"
    },
    {
        id: "stu-002",
        name: "Jane Smith",
        email: "jane@example.com",
        enrolledCourseIds: ["data-analytics"],
        paymentStatus: "Completed"
    }
];

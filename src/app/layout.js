import { Outfit, Roboto_Condensed, Open_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "McZeal Summer Course Camp | Master Tech Skills & Future-Proof Your Career",
  description: "Join McZeal's intensive Summer Course Camp. Learn AI, Web Development, Data Science & more. Designed for students & professionals. Enroll now and transform your career!",
  keywords: "McZeal, summer course, tech camp, AI course, web development, data science, coding bootcamp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${robotoCondensed.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  );
}

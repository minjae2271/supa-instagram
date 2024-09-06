import SideBar from "components/SideBar"

export default function MainLayout({ children }) {
    return (
        <main className="w-full h-screen flex items-center justify-center">
            <SideBar />
            {children}</main>
    )
}
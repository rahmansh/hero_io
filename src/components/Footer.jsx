const Footer = () => {
    return (
        <footer className="border-t border-gray-200 mt-16
  py-8 text-center">
            <p className="text-sm text-gray-400
  font-light">
                © {new Date().getFullYear()} <span
                    className="text-[#804fe8] font-semibold">HERO.IO</span> —
                All rights reserved.
            </p>
        </footer>
    )
}

export default Footer
import Image from "next/image";

const Header = () => {
    return (
        <header className="max-w-5xl w-full mx-auto p-6">
            <Image
                src="/powered.png"
                alt="Logo IMC B7Web"
                sizes="100vw"
                width={0}
                height={0}
                className="h-10 w-auto"
            />
        </header>
    );
};

export default Header;

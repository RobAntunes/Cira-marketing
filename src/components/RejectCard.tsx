const RejectCard = ({ bsline, signoff, name, className }: { bsline: string, signoff: string, name: string, className: string }) => {
    return (
        <div className={`w-full font-['Fellix',_sans-serif] bg-white px-3 md:px-4 lg:px-6 xl:px-8 pt-3 md:pt-4 lg:pt-6 xl:pt-8 pb-2 md:pb-3 lg:pb-4 rounded-xl lg:rounded-l-none lg:rounded-r-xl flex flex-col gap-1 md:gap-2 relative top-0 left-0 ${className}`} style={{
            transform: className.includes("rotate-12") ? "rotate(12deg)" : "rotate(0deg)"
        }}>

            <p className="text-sm md:text-base lg:text-lg font-['Fellix',_sans-serif]">"{bsline}"</p>
            <p className="text-xs md:text-sm opacity-50"> {signoff}</p>
            <p className="text-xs md:text-sm text-right">- {name}</p>
        </div>
    );
};

export default RejectCard;
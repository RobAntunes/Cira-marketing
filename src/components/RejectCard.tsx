const RejectCard = ({ bsline, signoff, name, className }: { bsline: string, signoff: string, name: string, className: string }) => {
    return (
        <div className={`w-full font-['Fellix',_sans-serif] bg-white px-8 pt-8 pb-4 rounded-r-xl flex flex-col gap-2 relative top-0 left-0 ${className}`} style={{
            transform: className.includes("rotate-12") ? "rotate(12deg)" : "rotate(0deg)"
        }}>

            <p className="text-lg font-['Fellix',_sans-serif]">"{bsline}"</p>
            <p className="text-sm opacity-50"> {signoff}</p>
            <p className="text-sm text-right">- {name}</p>
        </div>
    );
};

export default RejectCard;
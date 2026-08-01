const Icon = () => {
    return (
        <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Blue */}
            <rect
                x="4"
                y="9"
                width="16"
                height="16"
                rx="2"
                fill="#2D6CC0"
                transform="rotate(-35 12 17)"
            />

            {/* Red */}
            <rect
                x="18"
                y="2"
                width="16"
                height="16"
                rx="2"
                fill="#D83B36"
                transform="rotate(35 26 10)"
            />

            {/* Yellow */}
            <rect
                x="3"
                y="24"
                width="16"
                height="16"
                rx="2"
                fill="#F5B400"
                transform="rotate(35 11 32)"
            />

            {/* Green */}
            <rect
                x="18"
                y="20"
                width="16"
                height="16"
                rx="2"
                fill="#44A048"
                transform="rotate(-35 26 28)"
            />
        </svg>
    );
};

export default Icon;
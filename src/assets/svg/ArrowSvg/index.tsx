interface IProps {
    className: string
}

const ArrowSvg = (props: IProps) => {
    const { className } = props

    return (
        <svg className={className}
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11 1L6 5L1 1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg >
    )
}

export default ArrowSvg
import Image from 'next/image'

export const Card = ({src,title,desc,href }) => {
    return (
        <>
            <a href={href} className="relative block bg-black bg-center bg-no-repeat bg-contain rounded-lg group">
                <Image
                    src={src}
                    alt=""
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:opacity-90 sm:h-[450px] rounded-lg"
                    width=""
                    height=""
                    priority
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6 rounded-lg bg-black/40">
                    <h3 className="text-xl font-medium text-white">{title}</h3>

                    <p className="mt-1.5 max-w-[40ch] text-xs text-white">
                        {desc}
                    </p>

                    <span
                        className="inline-block px-5 py-3 mt-3 text-xs font-medium tracking-wide text-white uppercase bg-stone-400"
                    >
                        View
                    </span>
                </div>
            </a>
        </>
    )
}


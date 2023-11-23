import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#D5E1EF]">
      <div className="bg-white max-w-xs text-center p-4 pb-10 rounded-[20px]">
        <div>
          <Image
            className="rounded-[10px]"
            width={288}
            height={288}
            src="/images/image-qr-code.png"
            alt="qr code"
          />
        </div>
        <h1 className="text-[22px] font-bold mb-4 mt-6 text-[#1F314F]">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-[15px] text-[#7D889E] px-4 tracking-[0.188px]">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </main>
  )
}

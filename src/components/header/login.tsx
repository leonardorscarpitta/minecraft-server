import Image from "next/image"

export default function Login() {
  return (
    <div>
      <button>
        <Image src="https://img.icons8.com/plasticine/256/minecraft-optifine.png"
        width={30} height={30} alt="Logo da aba de login" />
        <p>Login</p>
      </button>
    </div>
  )
}
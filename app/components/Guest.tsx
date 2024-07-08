import { SignInButton } from "@clerk/nextjs"

const Guest = () => {
  return (
    <div className="container mx-auto p-3 sm:p-5">
        <h2 className="text-xl text-center text-slate-100">Welcome</h2>
        <p className="text-lg text-center text-slate-200">Please sign in to manage your transactions</p>
        <SignInButton />
    </div>
  )
}

export default Guest
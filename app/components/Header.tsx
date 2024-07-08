import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {
    const user = await checkUser();
    
  return (
    <nav className="w-screen p-4">
      <div className="max-w-3xl mx-auto flex justify-between items-center p-3 z-10">
        <h2 className="text-xl font-semibold">Expense Tracker</h2>
        <div className="bg-indigo-500 text-white py-2 px-3 rounded-md font-semibold">
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Header;

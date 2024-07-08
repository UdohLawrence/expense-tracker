import AddTransactions from "./components/AddTransactions";
import Guest from "./components/Guest";
import { currentUser } from "@clerk/nextjs/server";

const HomePage = async () => {

  const user = await currentUser();

  if(!user){
    return <Guest />
  }

  return (
    <div className="max-w-3l mx-auto p-3 sm:p-6">
      <h1 className="text-center text-2xl text-slate-700">Welcome, {user.firstName}</h1>
      <AddTransactions />
    </div>
  );
};

export default HomePage;

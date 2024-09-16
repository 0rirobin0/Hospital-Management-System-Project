"use client";
import { useState } from "react";
import Dialog from "@/component/Patient/test";

export default function TestPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <div>
      <button
        onClick={openDialog}
        className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
      >
        Open Dialog
      </button>

      <Dialog isOpen={isDialogOpen} closeDialog={closeDialog} />
    </div>
  );
}
  // Check if session exists
  // useEffect(() => {
  //   const patientsession = localStorage.getItem('patient');

  //   if (!patientsession)
  //   {
  //     // Redirect to profile if session exists
  //     router.push('/login');
  //   }
  // }, [router]);
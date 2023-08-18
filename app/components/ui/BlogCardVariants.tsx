import { cva } from "class-variance-authority";

export const BlogCardVariants: any = cva(
  "py-10 pb-3 h-4/6 relative bg-purple-100 group hover:bg-purple-200 cursor-pointer transition ease-out duration-300 rounded-md flex flex-col items-center justify-center",
  {
    variants: {
      variant: {
        purple: "bg-purple-100  hover:bg-purple-200 mt-72",
        indigo: "bg-indigo-100 hover:bg-indigo-200 mt-32",
        red: "bg-red-100 hover:bg-red-200 mt-5",
      },
    },
  }
);

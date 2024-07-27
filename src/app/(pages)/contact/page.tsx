import Link from "next/link";
import {} from "react";
import { contactLinks } from "./components/ContactLink";

function ContactPage() {
  return (
    <section className="animate-page">
      <h1 className=" flex items-center justify-center h-10 text-center sm:text-2xl text-xl ">
        <Link href={"/terms_&_conditions"} className="link_dark">
          Read This Before Contact
        </Link>
      </h1>
      <section className="animate-page'">
        <div className="w-fit mx-auto my-4">
          {contactLinks.map((data) => {
            return (
              <div
                key={data.IconName}
                className="flex gap-4 sm:my-10 my-5 items-center"
              >
                <span className="sm:text-4xl text-2xl  ">
                  <data.Icon />
                </span>
                <Link
                  className="link_dark my-2 sm:text-4xl text-2xl font-semibold"
                  href={data.path}
                >
                  {data.IconName}
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}

export default ContactPage;
export const metadata = {
  title: "SIRAJ | Contact",
  description: "",
  creator: "mr-zlaam",
  publisher: "mr-zlaam",
};

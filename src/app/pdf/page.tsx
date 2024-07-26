import Link from "next/link";

function PdfViewPage() {
  return (
    <>
      <section className="flex justify-center items-center h-[100dvh] md:h-screen md:block flex-col md:flex-row">
        <iframe
          className="h-fit w-fit    md:h-full md:w-full"
          src="/resume/Siraj.pdf"
        ></iframe>
        <Link className="link_dark text-xl my-4 sm:hidden" href={"/projects"}>
          Go Back
        </Link>
      </section>
    </>
  );
}

export default PdfViewPage;

import L from "app/components/layout";

export default () => {
  return (
    <L>
      <section>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Contact</h1>
        <p className="mb-4">
          You can contact me at <a href="mailto:cram@otmail.fr">this address</a>,&nbsp;
          or via <a href="https://www.linkedin.com/in/marc-dubois-31743017/">Linkedin</a>
        </p>
        I 'll be pleased to answer your questions !
      </section >
    </L>
  );
}
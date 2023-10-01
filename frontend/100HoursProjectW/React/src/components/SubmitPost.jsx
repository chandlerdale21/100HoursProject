import InputFormLogin from "./InputFormLogin";

function SubmitPost() {
  return (
    <>
      <section style={{ display: "flex", justifyContent: "center" }}>
        <InputFormLogin name="post" id="email" placeholder="Post Title" />
        <InputFormLogin
          className="styles.center"
          name="title"
          id="email"
          placeholder="Post Caption"
        />
      </section>
    </>
  );
}
export default SubmitPost;

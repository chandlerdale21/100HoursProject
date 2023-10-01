import UserInfo from "./UserInfo";
import PersonalPosts from "./PersonalPosts";
import SubmitPost from "./SubmitPost";

function ProfilePage() {
  return (
    <>
      <UserInfo />
      <SubmitPost />
      <PersonalPosts />
    </>
  );
}

export default ProfilePage;

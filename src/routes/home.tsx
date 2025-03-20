import PostTweetForm from "../components/post-tweet-form";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: grid;
  gap: 50px;
`;

export default function Home() {
  return (
    <Wrapper>
      <PostTweetForm />
    </Wrapper>
  );
}

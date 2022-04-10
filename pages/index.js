import React from "react";
import styled from "styled-components";
import { getPosts } from "../ghost/ghostData";

const Wrapper = styled.div`
  padding: 1rem;
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Index = ({ posts }) => {
  return (
    <Wrapper>
      <h1>Hello world</h1>
      {posts.map((post) => (
        <a href={`blog/${post.slug}`} key={post.id}>
          {post.title}
        </a>
      ))}
    </Wrapper>
  );
};

export const getStaticProps = async () => {
  let posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Index;

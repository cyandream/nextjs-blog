import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

function getPosts() {
    return [
        { id: 'page1', title: 'Page 1: Blog Posts' },
        { id: 'page2', title: 'Page 2: Blog Posts' },
        { id: 'page3', title: 'Page 3: Blog Posts' }
    ];
}

const PostLink = ({ post }) => (
    <li>
        <Link href="/p/[id]" as={`/p/${post.id}`}>
            <a>{post.title}</a>
        </Link>
        <style jsx>{`
            li {
                list-style: none;
                margin: 5px 0;
            }

            a {
                text-decoration: none;
                color: blue;
                font-family: 'Arial';
            }

            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </li>
);

export default function Blog() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                {getPosts().map(post => (
                    <PostLink key={post.id} post={post} />
                ))}
            </ul>
            <style jsx>{`
                h1,
                a {
                    font-family: 'Arial';
                    color: red;
                }

                ul {
                    padding: 0;
                }
                li {
                    list-style: none;
                    margin: 5px 0;
                }

                a {
                    text-decoration: none;
                }

                a:hover {
                    opacity: 0.6;
                }
            `}</style>
        </Layout>
    );
}

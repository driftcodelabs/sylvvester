import featuredBlog from "./featuredBlog";
import afterSchoolBalanceBlog from "./afterSchoolBalanceBlog";
import creativeArtConfidenceBlog from "./creativeArtConfidenceBlog";
import schoolLifeClassroomBlog from "./schoolLifeClassroomBlog";
import morningRoutinesBlog from "./morningRoutinesBlog";

export const blogPosts = [
  featuredBlog,
  afterSchoolBalanceBlog,
  creativeArtConfidenceBlog,
  schoolLifeClassroomBlog,
  morningRoutinesBlog,
];

export const blogSummaries = blogPosts.map(
  ({ id, slug, category, date, title, excerpt, color, image }) => ({
    id,
    slug,
    category,
    date,
    title,
    excerpt,
    color,
    image,
  }),
);

export function getBlogBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}

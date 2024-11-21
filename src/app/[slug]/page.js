import { fetchPageslug } from '../component/homepage/Api/fetchslug';

export default async function SlugPage({ params }) {
    const { slug } = params; 
    const pageData = await fetchPageslug(slug);

    if (!pageData || pageData.length === 0) {
        return (
            <div>
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
            </div>
        );
    }

    // Destructure the data for ease of use
    const { title, content, image_content } = pageData.attributes || {};

    return (
        <div>
            <h1>{title || "About Us"}</h1>
            {image_content && (
                <img
                    src={image_content.url}
                    alt={image_content.alt || "Image"}
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
            )}
            <div dangerouslySetInnerHTML={{ __html: content || "No content available" }} />
        </div>
    );
}
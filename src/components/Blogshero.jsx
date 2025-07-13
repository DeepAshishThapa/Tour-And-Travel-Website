import { BlogsCard } from "./BlogsCard"
import boat from '../assets/boat.jpg'
import tajmahal from '../assets/tajmahal.jpg'
import water from '../assets/water.jpg'
import { useEffect } from "react"
import AOS from 'aos';
export const Blogshero = () => {
    useEffect(() => {
        AOS.refresh(); // 👈 re-calculate all element positions when this section loads
    }, []);

    const BlogsData = [
        {
            img: tajmahal,
            title: "The 10 best places to visit in india",

            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Vitae delectus reprehenderit sit quas minima odio, quod nisi, commodi impedit, molestiae quis asperiores cupiditate.Ut, labore maiores? Veniam pariatur nesciunt quas reiciendis provident nostrum dolor sed fugiat id voluptatibus repellat consectetur iusto nemo iure sequi explicabo illum, earum autem nihil ratione officia? Dicta quisquam aperiam ipsum maxime molestias blanditiis ducimus fuga excepturi tempore veritatis natus, ratione nobis doloremque voluptate iure vero corrupti a amet ut corporis cum! Deserunt quasi incidunt, illo sunt eos, quam molestiae delectus autem animi quibusdam nihil culpa officiis consequuntur doloribus, eius perspiciatis fugit eum nulla rem? Officia.Lorem ipsum dolor sit amet consectetur adipisicing elit.Laborum expedita, nobis doloremque nam iusto placeat pariatur! Deserunt, illum necessitatibus? Accusantium tempora tenetur eum eveniet facilis exercitationem repellat autem, ullam molestias voluptatibus necessitatibus excepturi ipsam asperiores minima fugit doloremque numquam rerum magnam aut temporibus repudiandae! Accusantium, earum autem aperiam corrupti itaque eum doloribus voluptatem sequi necessitatibus omnis id vitae, consectetur voluptatibus cumque possimus amet, non consequuntur vel! Ullam quasi vitae eius consequuntur quis libero fuga ad iste, aspernatur dolorum deleniti accusamus iure dignissimos ratione id corrupti soluta at.Suscipit, eum? Quibusdam totam porro voluptatibus consequatur, fugiat reiciendis quas qui dicta, deleniti facere natus quisquam corrupti delectus ipsum tempore eum, nesciunt id non ut? Ad, ex! Rerum mollitia consequuntur sed deleniti inventore atque voluptas sapiente molestias obcaecati, veritatis nesciunt alias cum dolorum incidunt similique recusandae.Saepe voluptatum in sint neque accusamus, consequatur eum et eos ab deleniti praesentium nesciunt doloremque dolorem necessitatibus accusantium hic quidem minima magnam? Ipsa perspiciatis doloremque molestiae vel exercitationem alias sed distinctio, obcaecati nihil sint dolorum molestias ipsum quos asperiores magni cupiditate in a ullam.Unde fugit ipsam porro iure nisi architecto ad facilis aut.Ipsa in architecto laudantium facilis mollitia? Quibusdam velit eos excepturi modi deleniti autem.",
            author: "John Doe"
        },
        {
            img: water,
            title: "Top places to visit in US",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae delectus reprehenderit sit quas minima odio, quod nisi, commodi impedit, molestiae quis asperiores cupiditate. Ut, labore maiores? Veniam pariatur nesciunt quas reiciendis provident nostrum dolor sed fugiat id voluptatibus repellat consectetur iusto nemo iure sequi explicabo illum, earum autem nihil ratione officia? Dicta quisquam aperiam ipsum maxime molestias blanditiis ducimus fuga excepturi tempore veritatis natus, ratione nobis doloremque voluptate iure vero corrupti a amet ut corporis cum! Deserunt quasi incidunt, illo sunt eos, quam molestiae delectus autem animi quibusdam nihil culpa officiis consequuntur doloribus, eius perspiciatis fugit eum nulla rem? Officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum expedita, nobis doloremque nam iusto placeat pariatur! Deserunt, illum necessitatibus? Accusantium tempora tenetur eum eveniet facilis exercitationem repellat autem, ullam molestias voluptatibus necessitatibus excepturi ipsam asperiores minima fugit doloremque numquam rerum magnam aut temporibus repudiandae! Accusantium, earum autem aperiam corrupti itaque eum doloribus voluptatem sequi necessitatibus omnis id vitae, consectetur voluptatibus cumque possimus amet, non consequuntur vel! Ullam quasi vitae eius consequuntur quis libero fuga ad iste, aspernatur dolorum deleniti accusamus iure dignissimos ratione id corrupti soluta at. Suscipit, eum? Quibusdam totam porro voluptatibus consequatur, fugiat reiciendis quas qui dicta, deleniti facere natus quisquam corrupti delectus ipsum tempore eum, nesciunt id non ut? Ad, ex! Rerum mollitia consequuntur sed deleniti inventore atque voluptas sapiente molestias obcaecati, veritatis nesciunt alias cum dolorum incidunt similique recusandae. Saepe voluptatum in sint neque accusamus, consequatur eum et eos ab deleniti praesentium nesciunt doloremque dolorem necessitatibus accusantium hic quidem minima magnam? Ipsa perspiciatis doloremque molestiae vel exercitationem alias sed distinctio, obcaecati nihil sint dolorum molestias ipsum quos asperiores magni cupiditate in a ullam. Unde fugit ipsam porro iure nisi architecto ad facilis aut. Ipsa in architecto laudantium facilis mollitia? Quibusdam velit eos excepturi modi deleniti autem.",
            author: "by Someone",

        },
        {
            img: boat,
            title: "Top places to visit in Japan",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae delectus reprehenderit sit quas minima odio, quod nisi, commodi impedit, molestiae quis asperiores cupiditate. Ut, labore maiores? Veniam pariatur nesciunt quas reiciendis provident nostrum dolor sed fugiat id voluptatibus repellat consectetur iusto nemo iure sequi explicabo illum, earum autem nihil ratione officia? Dicta quisquam aperiam ipsum maxime molestias blanditiis ducimus fuga excepturi tempore veritatis natus, ratione nobis doloremque voluptate iure vero corrupti a amet ut corporis cum! Deserunt quasi incidunt, illo sunt eos, quam molestiae delectus autem animi quibusdam nihil culpa officiis consequuntur doloribus, eius perspiciatis fugit eum nulla rem? Officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum expedita, nobis doloremque nam iusto placeat pariatur! Deserunt, illum necessitatibus? Accusantium tempora tenetur eum eveniet facilis exercitationem repellat autem, ullam molestias voluptatibus necessitatibus excepturi ipsam asperiores minima fugit doloremque numquam rerum magnam aut temporibus repudiandae! Accusantium, earum autem aperiam corrupti itaque eum doloribus voluptatem sequi necessitatibus omnis id vitae, consectetur voluptatibus cumque possimus amet, non consequuntur vel! Ullam quasi vitae eius consequuntur quis libero fuga ad iste, aspernatur dolorum deleniti accusamus iure dignissimos ratione id corrupti soluta at. Suscipit, eum? Quibusdam totam porro voluptatibus consequatur, fugiat reiciendis quas qui dicta, deleniti facere natus quisquam corrupti delectus ipsum tempore eum, nesciunt id non ut? Ad, ex! Rerum mollitia consequuntur sed deleniti inventore atque voluptas sapiente molestias obcaecati, veritatis nesciunt alias cum dolorum incidunt similique recusandae. Saepe voluptatum in sint neque accusamus, consequatur eum et eos ab deleniti praesentium nesciunt doloremque dolorem necessitatibus accusantium hic quidem minima magnam? Ipsa perspiciatis doloremque molestiae vel exercitationem alias sed distinctio, obcaecati nihil sint dolorum molestias ipsum quos asperiores magni cupiditate in a ullam. Unde fugit ipsam porro iure nisi architecto ad facilis aut. Ipsa in architecto laudantium facilis mollitia? Quibusdam velit eos excepturi modi deleniti autem.",
            author: "by Someone"
        }
    ]
    return (
        <>
            <div className="sm:px-20 px-2 pt-8 lg:max-w-[1200px] 2xl:max-w-[1400px] mx-auto sm:max-w-[700px] max-w-[400px]">
                <div className="flex gap-2 items-center">

                    <div className="bg-cyan-600 w-2 h-13 inline"></div>
                    <h1 className="font-bold text-3xl ">Our Latest Blogs</h1>

                </div>
                <div className="pt-10 grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4 hover:cursor-pointere"


                >
                    {BlogsData.map((item, index) => (
                        <div data-aos="fade-up" key={index}>
                            <BlogsCard {...item} />
                        </div>
                    ))}

                </div>

            </div>

        </>
    )
}
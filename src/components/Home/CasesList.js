import bocchi2 from "assets/img/canva/bocchi2.jpg"
import genshin4 from "assets/img/canva/genshin4.jpg"
import genshin5 from "assets/img/canva/genshin5.jpg"
import genshin6 from "assets/img/canva/genshin6.jpg"
import genshin7 from "assets/img/canva/genshin7.jpg"
import genshin8 from "assets/img/canva/genshin8.jpg"
import CaseCard from "./CaseCard"
const posts = [
    {   
        'id': 'P001',
        'date': 'Jan 20, 2023',
        'datetime':'2023-01-20',
        'href':'#',
        'imageUrl': bocchi2,
        'category': 'Music',
        'title': 'The Girls Who Rocked the World',
        'content': 'These four girls are the ultimate rockstars, taking the music scene by storm with their unique sound and incredible stage presence. With each performance, they leave audiences in awe and craving more. ',
        'author':{
            'name':'Johan Timana',
            'href': '#',
            'imageUrl':genshin5
        }
    },
    {
        'id': 'P002',
        'date': 'Oct 13, 2022',
        'datetime': '2022-10-13',
        'href': '#',
        'imageUrl': genshin4,
        'category': 'Dance',
        'title': 'Exploring the Art of Belly Dance in Sumeru',
        'content': "Arabian dance is a unique and elegant dance form that has been popular for centuries in the Middle East. With its graceful and fluid movements, it's no wonder that Arabian dance has become a symbol of beauty and passion",
        'author': {
            'name': 'Elena Gomez',
            'href': '#',
            'imageUrl': genshin6
        }
    },
    {
        'id': 'P003',
        'date': 'Dec 25, 2019',
        'datetime': '2019-12-25',
        'href': '#',
        'imageUrl': genshin8,
        'category': 'Sport',
        'title': 'The Crimson Lion',
        'content':' She was a force to be reckoned with, the most skilled and beautiful mercenary in all the land. With her piercing gaze and quick wit, she could take down any target without breaking a sweat. ',
        'author': {
            'name': 'David Kim',
            'href': '#',
            'imageUrl': genshin7
        }
    }
]

export default function CasesList(){
    return (
        <div class="bg-white py-24 sm:py-32">
            <div class=" max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-3xl font-bold tracking-tight text-mylightblue-900 sm:text-4xl">From the blog</h2>
                <p class=" mt-2 text-lg leading-8 text-mylightblue-700">Learn how to grow your business with our expert advice.</p>
                </div>
                <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-mylightblue-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {posts.map((card,index) => (
                    
                   <CaseCard data={card}  index={index} />
                ) )}    
                    


                </div>
            </div>
            </div>
    )

}
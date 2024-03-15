import Card from './Card.jsx'

function Content() {
    const students = [
        {id:1, image:"https://scontent.fceb3-1.fna.fbcdn.net/v/t39.30808-1/260749045_354469706479786_8460321604076695404_n.jpg?stp=c0.67.200.200a_dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEvKhHeiTs4jbMmYnixx4Q417qw91HkZwLXurD3UeRnAsd2a4DHzmugmOAwnbDV6lQdidjILiPAecBpeMneH1cy&_nc_ohc=gHwWn44Fv-IAX-gNqwD&_nc_ht=scontent.fceb3-1.fna&oh=00_AfCtlm6If3ubBUmgZZ3nUc7d7o6IoAz2o-Ruz9LbpXUyEA&oe=65F97E68", name:"Miles Maratas", email:"milesmaratas29@gmail.com"},
        {id:2, image:"https://scontent.fceb3-1.fna.fbcdn.net/v/t1.6435-9/135326960_1157214658027727_3243163980965826586_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHkyGmcexUSUh_bHWdaqhWpTpcZeLv8M7ZOlxl4u_wztic5q15FT54rdvUZuVXOdVQZRMbgJwb89pkCykMZnBNi&_nc_ohc=EvyEWeiCrdAAX8Ucxy4&_nc_oc=AQkRTxcrkrrAxAT9Nowkqx8gHrJeeR146YbNK2PPsin_mRiWW1fxoMnysUfYLMYjzug&_nc_ht=scontent.fceb3-1.fna&oh=00_AfDD6fD6eWZifAyeAlMgfAKydh4ex7UtnLz3HJ0MGEmosg&oe=661BD8E5", name:"Louie Jay Jugan", email:"weejayuy@gmail.com"},
        {id:3, image:"https://scontent.fceb3-1.fna.fbcdn.net/v/t1.6435-9/29250214_185386205410464_5388704567879794688_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGTGgZW8VqONEqq05SzW03HuEIZkX7uqxK4QhmRfu6rElo4VN_1O6PrmBkLwDLOK9PIBcNxZpnmEbW6ba8KxKcb&_nc_ohc=80TKb0bnPG0AX-XBdEM&_nc_ht=scontent.fceb3-1.fna&oh=00_AfB2muUOqsCjXGZmPoUohFOx3Ghabekai_6bJK-9yU3Emw&oe=661BEC9E", name:"Angel Kaye Oporto", email:"oportoak@gmail.com"},
        {id:4, image:"https://scontent.fceb3-1.fna.fbcdn.net/v/t39.30808-6/322568946_493546762860203_2908100475769311431_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEMBhXQNRcMzge1TbDqrjjyPpBFKQK9nho-kEUpAr2eGiBriPmd97MGW98vaB_h4nHjQuzs_Mac7HmbDsYGWolJ&_nc_ohc=5LyRKhq1jkEAX_Zf2BZ&_nc_ht=scontent.fceb3-1.fna&oh=00_AfBo-T9sXmnzxaGlnxXUg66tzv6dmA34jIBcvMbr01mCsA&oe=65F9ED47", name:"Ken Angelo Ardiente", email:"kenangeloardiente@gmail.com"},
        {id:5, image:"https://scontent.fceb3-1.fna.fbcdn.net/v/t39.30808-1/379406115_6849904221720335_7596890586574908024_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFeOgk6JsZ7gUgfb0s_e80SOyT39QGcnWI7JPf1AZydYvUXSSvjSr-AR3YGwn77CDqV0lGCHdqp5Mryhy1ojcr7&_nc_ohc=zLHAeiyfgUQAX-wk0Il&_nc_ht=scontent.fceb3-1.fna&oh=00_AfBJkowt3RtVzWnD0PGNAdqclgZYZxfV7EnQQ9OKYC5_Ww&oe=65FA50FF", name:"Mary Therese Colina", email:"marytheresecolina@gmail.com"}];
    return (
        <div>
            {
                students.map((student, index) => (
                    <Card 
                        id = { student.id }
                        image = { student.image }
                        name = { student.name }
                        email ={ student.email } />
                    ))
            }
        </div>
    )
}

export default Content
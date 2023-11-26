import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    posts: [
      {
        id: 1,
        author_name: 'José Marià del Coca',
        author_email: 'jose55@example.com',
        created_at: 'October 7, 2023',
        text: 'Turkiye 2023',
        image_path: 'img/postitus.jpeg',
        image_alt: 'Travel image',
        likes:0
      },
      {
        id: 2,
        author_name: 'José Marià del Coca',
        author_email: 'jose55@example.com',
        created_at: 'October 5, 2023',
        text: 'Toomemägi is so beautiful. Yesterday me and my dog had so much fun running through piles of colorful leaves!',
        image_path: null,
        image_alt: null,
        likes:0
      },
      {
        id: 3,
        author_name: 'José Marià del Coca',
        author_email: 'jose55@example.com',
        created_at: 'October 1, 2023',
        text: "Girls and I spent a weekend in Milano. There was so much shopping and eating to do that we'll come back next month too.",
        image_path: null,
        image_alt: null,
        likes:0
      },
      {
        id: 4,
        author_name: 'José Marià del Coca',
        author_email: 'jose55@example.com',
        created_at: 'September 25, 2023',
        text: "I can't believe how blessed I am!! My neighbours surpised me with a pool party after I came back from long buissness trip.",
        image_path: null,
        image_alt: null,
        likes:0
      },
      {
        id: 5,
        author_name: 'José Marià del Coca',
        author_email: 'jose55@example.com',
        created_at: 'September 19, 2023',
        text: "I'm so proud of my little brother. He bought his first private jet all by himself.",
        image_path: null,
        image_alt: null,
        likes:0
      },
      {
        id: 6,
        author_name: 'Rosalina Pacífica Castillo Rojas',
        author_email: 'ro.rojas@example.com',
        created_at: 'October 7, 2023',
        text: "Just had the most incredible time at the FC Barcelona game! The energy at the stadium was absolutely electric, and the passion of the fans was off the charts. Witnessing the magic of Messi on the field and the teamwork that makes this club legendary was a dream come true. ⚽❤️🔵🔴 Can't wait for the next match! #FCBarcelona #FootballMagic #UnforgettableExperience",
        image_path: 'img/messi.jpeg',
        image_alt: 'Football game',
        likes:0
      },
      {
        id: 7,
        author_name: 'Rosalina Pacífica Castillo Rojas',
        author_email: 'ro.rojas@example.com',
        created_at: 'October 7, 2023',
        text: "Just experienced the enchanting Vienna Christmas Market, and it's pure holiday magic! The twinkling lights, festive decorations, and the scent of mulled wine and roasted chestnuts filled the air. And to top it off, the snowfall added that perfect touch of winter wonderland! ❄️🎄✨ #ViennaChristmas #MagicalMoments #SnowyDelight",
        image_path: 'img/christmas.jpeg',
        image_alt: 'Christmas market',
        likes:0
      },
      {
        id: 8,
        author_name: 'Rosalina Pacífica Castillo Rojas',
        author_email: 'ro.rojas@example.com',
        created_at: 'October 7, 2023',
        text: "Just had an eventful start to my Mexico trip! Unfortunately, my luggage went on its own adventure and got lost in transit. 😅 But thanks to my trusty Apple AirTag, I was able to track it down and reunite with my belongings. 🛄✈️ It's incredible how technology can come to the rescue when you least expect it! Grateful for a smooth recovery and ready to continue exploring this beautiful country. 🇲🇽💼 #TravelAdventure #AppleAirTag #LostAndFound",
        image_path: 'img/mexico.jpeg',
        image_alt: 'Mexico',
        likes:0
      },
      {
        id: 9,
        author_name: 'Rosalina Pacífica Castillo Rojas',
        author_email: 'ro.rojas@example.com',
        created_at: 'October 7, 2023',
        text: "🚀 Just secured my ticket to the ultimate destination – the MOON! 🌕 Thanks to my visionary outlook and a billion-dollar net worth, I've become one of the exclusive pioneers to book a space adventure with SpaceX. 💰💫 There's no stopping the limitless possibilities of private space travel, and I'm beyond excited to be at the forefront of this groundbreaking journey! 🌌✨ #SpaceXBillionaire #ToTheMoonAndBeyond #LivingTheDream",
        image_path: null,
        image_alt: null,
        likes:0
      },
      {
        id: 10,
        author_name: 'Rosalina Pacífica Castillo Rojas',
        author_email: 'ro.rojas@example.com',
        created_at: 'October 7, 2023',
        text: '🐧😍 So, today I had the most unexpected and adorable encounter – PENGUINS! 🐧❤️ I was in a remote, icy wilderness when these little waddlers popped out from the snow. Their cuteness factor is OFF THE CHARTS! 📸🏔️ #PenguinLove #WildlifeAdventures #AntarcticaMagic 🥰❄️',
        image_path: null,
        image_alt: null,
        likes:0
      }
    ]
  },
  mutations: {
    incrementLike(state, id) {
      for(let post of state.posts){
        if (post.id === id ){
          post.likes+=1
          return
        }
      }
    },
    resetLikes: state=> {
      state.posts.forEach(post => {post.likes=0})
    }
    },
  actions: {
    incrementLikeAct(act, id) {
    setTimeout(function() {
    act.commit("incrementLike", id)}, 70)
    },
    resetLikesAct: act => {
      setTimeout(function() {
        act.commit("resetLikes")}, 70)
    }
  }
}
  )
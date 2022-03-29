import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    article=[{
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Will Smith slaps Chris Rock after Jada joke",
        "description": "The Oscars were halted momentarily when best actor winner Will Smith took offence to a joke by presenter Chris Rock",
        "url": "http://www.bbc.co.uk/news/entertainment-arts-60898250",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/15B4F/production/_123911988_p0bxwpcr.jpg",
        "publishedAt": "2022-03-28T08:22:20.0213894Z",
        "content": "Before Will Smith picked up his Oscar for best actor, comedian Chris Rock made a joke at wife Jada's expense while presenting the best documentary prize. This is the moment Will Smith interrupted the… [+5 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "El Salvador: State of emergency after 62 gang killings in a day",
        "description": "The 62 deaths recorded on Saturday make it the country's most violent 24-hour period for 30 years.",
        "url": "http://www.bbc.co.uk/news/world-latin-america-60893048",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/CF4E/production/_123907035_editgettyimages-1239535283.jpg",
        "publishedAt": "2022-03-28T07:22:25.241073Z",
        "content": "Image source, Getty Images\r\nImage caption, Police said they had arrested four leaders of the MS-13 gang ahead of the vote\r\nEl Salvador's parliament has approved a state of emergency after the Central… [+2288 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Beatings and forced abortions: Life in a North Korea prison",
        "description": "A new investigation sheds more light on human rights violations in North Korean prisons.",
        "url": "http://www.bbc.co.uk/news/world-asia-60870739",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/10FDD/production/_123879596_11.jpg",
        "publishedAt": "2022-03-28T07:22:23.6633408Z",
        "content": "Media caption, Inside a North Korean prison for defectors\r\nAfter crawling into her cell, Lee Young-joo was ordered to sit cross-legged with her hands on her knees. \r\nShe was not allowed to move for u… [+5473 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Shanghai Covid: Oil prices slide after city starts lockdown",
        "description": "The nine-day lockdown of Shanghai is China's largest since the coronavirus outbreak began.",
        "url": "http://www.bbc.co.uk/news/business-60896794",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1381D/production/_123910997_tv074910613.jpg",
        "publishedAt": "2022-03-28T04:37:21.8029734Z",
        "content": "Image caption, A man gets tested for Covid-19 at a makeshift testing site behind barriers of an area under lockdown in Shanghai\r\nGlobal oil prices have fallen as China starts to implement a city-wide… [+3302 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "The long fight to prosecute our father for rape",
        "description": "Sisters Alex and Chyann saw their case rejected three times as they tried to get justice.",
        "url": "http://www.bbc.co.uk/news/uk-60880016",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/BAA4/production/_123908774_p0bxv7rx.jpg",
        "publishedAt": "2022-03-28T03:37:22.3500619Z",
        "content": "Sisters Alex and Chyann were repeatedly raped by their father as children. \r\nAfter their case was rejected three times by the Crown Prosecution Service (CPS), they found they had one last avenue to t… [+389 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Will Smith hits Chris Rock on Oscars stage",
        "description": "The actor appears to strike the comedian in the face after he makes a joke about Smith's wife.",
        "url": "http://www.bbc.co.uk/news/entertainment-arts-60897004",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/12819/production/_123910857_will_punch.jpg",
        "publishedAt": "2022-03-28T03:07:22.9758183Z",
        "content": "Referring to Pinkett Smith's shaved hairdo, Rock said: \"Jada, can't wait for GI Jane 2.\""
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Ukraine: UK lawyer appointed to probe war crime claims",
        "description": "The former International Criminal Court judge will advise Ukraine's prosecutor, attorney general says.",
        "url": "http://www.bbc.co.uk/news/uk-60895943",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/F231/production/_123910026_maiupol.jpg",
        "publishedAt": "2022-03-28T01:07:22.4765754Z",
        "content": "By Harriet AgerholmBBC News\r\nImage caption, Russian President Vladimir Putin has been accused of violating international law, including targeting civilians\r\nThe UK's attorney general has appointed a … [+2628 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Army boss raises partition fears: Ukraine round-up",
        "description": "Ukraine's military intelligence chief fears a Korea-style outcome as Biden's jab at Putin makes further waves.",
        "url": "http://www.bbc.co.uk/news/world-europe-60893650",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/488A/production/_123907581_tv074760315.jpg",
        "publishedAt": "2022-03-28T01:07:18.1318284Z",
        "content": "Image caption, Russian troops have so far failed to subdue the whole of Ukraine\r\nUkraine's military intelligence chief, Kyrylo Budanov, has warned that Russia is trying to apply what he called the \"K… [+5307 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Oscars 2022: Stars gather for ceremony in Los Angeles",
        "description": "All the action and reaction from the 94th Academy Awards, which are taking place in Hollywood.",
        "url": "http://www.bbc.co.uk/news/live/entertainment-arts-60838175",
        "urlToImage": "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.2.0/bbc_news_logo.png",
        "publishedAt": "2022-03-27T22:22:24.8985536Z",
        "content": "Here in Los Angeles, the excitement in the air is palpable. \r\nWith this year's awards season longer than usual and the Oscars taking place in late March due to a hangover from Covid and lockdowns, th… [+1547 chars]"
    },
    {
        "source": {
            "id": "bbc-news",
            "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Israel attack: Two shot dead in Hadera",
        "description": "Six other people were injured in the attack by two gunmen in the city of Hadera.",
        "url": "http://www.bbc.co.uk/news/world-middle-east-60895393",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/C40E/production/_123909105_gettyimages-1239550222.jpg",
        "publishedAt": "2022-03-27T21:52:22.1630329Z",
        "content": "Image source, AFP/Getty Images\r\nTwo suspected gunmen have killed two people in a northern Israeli city on Sunday, Israeli security officials say.\r\nThe gunmen - who police say were Arab Israeli citize… [+1340 chars]"
    }
    ]
    constructor(props)
    {
        super(props);
        this.state={
            article:this.article,
            loading:false
        }
    }
     
    render() {
        return (

            <div className ="container my-3">
                <div className="row my-2">
                {this.state.article.map((element)=>{
                    
                   return <div className="col-md-3 my-3" key={element.url}> 
                        <NewsItem title={element.title} description={element.description} imageUrl= {element.urlToImage} newsurl={element.url}/>
                    </div>
                     })}

                </div>
        

            </div>
        )
    }
}

export default News
import logo from './logo.svg';
import './App.css';

function App() {
  const data = [
    {
      image:"https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Holiday_Inn_Logo.svg/1200px-Holiday_Inn_Logo.svg.png",
      text:"1.5 miles away from joblocation",
      text2:'Singles $120, Double $145'
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UaO8zvh5DjMIZ3C-jUQyIdtnCH9VUBvPRCZIbf60YQ&s",
      text:'1.5 miles away from joblocation',
      text2:'Singles $120, Double $145'
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UaO8zvh5DjMIZ3C-jUQyIdtnCH9VUBvPRCZIbf60YQ&s",
      text:'1.5 miles away from joblocation',
      text2:'Singles $120, Double $145'
    },
    
    
  ]
  return (
    <div className='mincontainer'>
      <div className='area'>
        <h1 className='mainheading'>LODGN</h1>
        <div className='nextcontent'>Current requests</div>
        <hr />
        <div className='secondcontent'>Ongoing stays</div>
        <hr />
        <div className='thirdcontent'>Previous stays</div>
        <hr />
        <div className='fourthcontent'>Reports</div>
        <hr />
        <div className='flex'>
          <button className='fifthcontent'>Log-Out</button>
        </div>
        <div className='buttonbottom'>Help-Desic</div>
        <div className='number'>786-874-9988</div>
      </div>

      <div className='mainitem'>
        <div className='box'>
          <div className='parentBox'>
            <div className='doc_name'>
              <h3 className='ST'> St Judes Hospital</h3>
              <p>sarasota.FL 33178</p>
            </div>
            <div className='doc_name'>
              <div className='center_main'>
                <div className='marginLeft'>
                  <p className='h3'>10</p>
                  <p className='h3'>October</p>
                </div>
                <p className='h3'>-</p>
                <div className='marginLeft'>
                  <p className='h3'>17</p>
                  <p className='h3'>December</p>
                </div>
              </div>
            </div>
            <div className='doc_name'>
              <h3 className='ST'>20 Rooms</h3>
              <p className='STV'>10 Singles, 10 doubles</p>
            </div>
            <div className='doc_name'></div>
          </div>
          <div className='parentBox'>
            <div className='ChildBox'>
              <div className='child'>
                <p >RECIVED</p>
              </div>
              <div className='child'>
                <p>NEGOTIATING</p>
              </div>
              <div className='child'>
                <p>COMPLETED</p>
              </div>
            </div>
          </div>
        </div>



        <div className='CompleteBox_main'>
          <div className='box'>
            <div className='parentBox'>
              <div className='doc_name'>
                <h3 className='ST'> St Judes Hospital</h3>
                <p>sarasota.FL 33178</p>
              </div>
              <div className='doc_name'>
                <div className='center_main'>
                  <div className='marginLeft'>
                    <p className='h3'>10</p>
                    <p className='h3'>October</p>
                  </div>
                  <p className='h3'>-</p>
                  <div className='marginLeft'>
                    <p className='h3'>17</p>
                    <p className='h3'>December</p>
                  </div>
                </div>
              </div>
              <div className='doc_name'>
                <h3 className='ST'>20 Rooms</h3>
                <p className='ST'>10 Singles, 10 doubles</p>
              </div>
              <div className='doc_name'></div>
            </div>
            <div className='parentBox'>
              <div className='ChildBox'>
                <p className='WORD'>COMPLETED</p>
              </div>
            </div>
          </div>
          <div className='CompleteBox2'>
              {data.map((item) => {
                console.log("🚀 ~ file: App.js:119 ~ {data.map ~ item:", item)
                 return(
                  	<div className='Chailds'>
                      	<div className='Chailds1'>
                        	<img src={'https://s3.mediusoft.com/staffy/company-logo/0c8977f73e385a68236c7306c62d2ff8_company_logo.svg'}/>
                      	</div>
                      	<div className='Chailds2'>
                        	<p>{item.text}</p>
                        	<p>{item.text2}</p>
                        	</div>
                  	</div>
                 )
              })
            }
          </div>
          <div className='ChatIcon'>
            <img className='logo' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEX///8zMzMvLy8eHh4qKiolJSUhISEtLS3r6+sbGxsnJycZGRkjIyMYGBj8/Pz09PSWlpa2trbo6OjDw8Pe3t7MzMxOTk7U1NTOzs59fX1UVFR0dHRBQUETExNISEja2tqGhoaqqqqgoKCYmJiwsLBmZmY5OTlDQ0NcXFyMjIxra2u+vr52dnYAAAAMDAwf5YlWAAAMiElEQVR4nO1d67qiuBKVEIJELoqKoqiIgqB7+v0f72DvJhdARUUIHNeP+WZGN2ZRlbqlkgwGX3zxxRdffPHFF7XAsneL+WUfHMZJ4ifJ+BDsL/PFzrbaHtj7GM6PyXnlRVBBMtIVnAJe/6Ho6X8rMPJW5+Q4t9se5iswrd3R3RobWccqANItAKBiXTaMrbtfWmbbg64MczbxV8pIh7eZFZhCXUMr9zjrAEv7uHYU9AQ5jibaro+ztincw2K8VZ4RXSlLxUuWbRMphbX0sYbfYUdYps/x56LZ2YXvjWAN7DJALfIFkuQw2KLH0gOp4VRVCNN/pP/6+OsYbYNh29T+Yn4eKXf8gQoxktMvRJ4Tx+F5/XM+h/Fq60WSqqS+BKp3/lYZhfO26VlHZ6TeGKCK0QhuQ/cwWabhS94PmEN7N58c3HCraqnTvPWMkXNsc0YOx55cLgKIDBgnk93w8fCs4W6ShNC44WKAHB3aUlYrUcvUE0AkS+7Efs55X8OESC5lCRSYtCHH4XiDS7RKQSf38mqgaV/ck66UaCzeJE3L0QqAUnzZuh4Gu/cCL3MXxEgvSlKBh0blOPH0oi5tnH09WYK9X22K+q97x1qeXgWLLcr/PkRRrc7LDjyUjyAA2jYTBAzdTY4f0CW3fr+1dEFeW8HGbWA6HqOcgQHa6UOxxzDwtBxHHH1aVYdhzgGqhnP5XFJnXrYGb1oBij8qxonMTw4VxZ8Oq+axznNU5c+JcXjWcvoZNjH1l2FOV7XwQ2Kc52ag5kw/80PFX3b4Vwujj2jOgZ+BCph84ldu4MIHGEA+1P4TVixzbxGOa/+JuzDHkDMBclxziLPzuOePwubrRbPziHvH3q7Op1+4mB/iS50Prz4KlX3NANY4ioPBzYF1WzmpdeZsgVHbTPFZSwalJi1MHheJFaPm1/JQc42Yh6K43VUGO2RHo69riKfMmLHT4E/DJrQE4z+Mpirx2xQth3HzUBKhhjlnNRU7bxoFa8U8TVmJsQ5mrxi1gqu3KForRoJaHUpfC8w1Y/vwOxTNLSNBrf0pSDFmKMLty2/eDBkJouaqJFVwZEwqDl+l+MOou9xUHlEVU0aKys9rz/DpawKyCEaUx5LJGpH/yhMCGqoBuKh5eHVgwSzqGMHzfz9nCAIRCeYoPp0Tz5gVPk1MgilFjZHCk/mcuaXln5FoRoaCMTfqkz5jTf0EaicZrIYLtYZ4/cwfHukk1PafGl0t2FMpGk947BkjQf9jg6sHLiPFylPRdMgkxOEnR1cLaOClOlWn4pi8FnUrWltLEdaWWH1UMXTeUdVWaq1nfQg7GlzK1cZ7Iu/EENvKZNgTuwhOVb5/IMu7+MWAtnFQ34Yq1MJtkhICT/xJ+AvLI2oHH5chfghD1Ho/UmXMyZIDfKh3c2JmFL+BodUFn1gb7ZFciJkBnihVmSowiZ6C7f1vTogIDXHj7TJMiT3V7tfkyauA4gczPEJIlO/e1/YkmsFilEarw6Ye404EbpJZqIhUOqyGcWZswOm2BZnQdd6uuEIKi8Zut2fiKhOh/kJhp3UEWTAGVre+QotPoMmR1QYaT9/yiXGWFurdiLjz2GdCVOPyL9gbEvp0bxZeYZGAc1PuCcaZve2gIf0FMae4lIEZZXqsirHN4XkMs2kGojKHMc28/ePwXFiQxAiVxZz00+5kTXnM70nJikhI0PzIagMJyqKisSQFcqWL3j5DkNkaraimbqakNyxtN0A8HnTzH5kk+XiQQQoOUjxV89Z0SZS0m/FMhj1R0/yS4CFz91qXlTRV00xSOF9XdP5JF1Su/YsJkxLhP7CyzBD7rQysPiSZMsq8vyCuUriukmcxzWSF+PYR4kdAt6dhGptK5X79/C9mvZ0edwZZoUI9c/87cyNFR9k5ZKEL79htUqARq3vtFRzJ2hk74XbZ9NRFbZ2pjkXGkFsunWSmFHc1+aUgtQzEFhVJAUNqbWD1IaPClTLI7Oy+KR0M4jKrGf5zFtBva1g1wv8nLpVZXCLBXKez3wxZesGG2KSCobe5H6YuELPJVDIsEq12PSq9gkSmmDIcZgsWwnaSPgPSdWpQ12dnDA2hj6GqCMqGBjWkz8voemZxBdVIGtQQuW66H9KkViWrtzFzbpnNzU03F514mIQhzYFJS9Gm20Waf8gYynR5ov8y7P887JktJQypLSUeZNRXf0g9iHgbuJ4H0cgRnXM0LhV590hVkLiUabiguUX3C1FMbsH0OPc/P6Q5fvfLpeU5/v9BnYbU2rrZ0MYjMyrcCmKf6qVDUi9lHQOpeaPuJ/nlNW9bytxFt1fxr6DrFpw+krWn7nZ8ZSBWk1/mJuuHzo2/6w6y9UPI75ola8Bq17ML+0YbMMmBOx+ZTm8YTdKL0fmVC9KLgXIVGdKG8vpRKEKA9tPke71JT1TH0/xZluoWkohFL5ovGZNp5LcEm6RFuh+9iSAqfNS3/lK/8Bmxsp1WU9piWWxW70efd7Z/snSX9ppkHd0tuNFe/bJixaUH+y3uS4nZM9NVW2PTTZaln5N4R6n/kN5mQBmUW8sZ2bsGuhm5kcK29OdGMYZsIUXdzPQPmZLCWwcqMedKNTqymmCScxVGt6pNJtmO0clyDdl9eGsL6YDZjt+dY00oSIN32Z6nDFbU4c3cPqlq3yvcB/RAoq6VhmfkOIi7B8yZZMM37toaDdmI/qBcSA/G2HSr+s0cyvJgC6wEqr0KwWCRE+bUR4ey0KMxOmVsXHqyycMDzYg+S7A7jRkXIpcKO9PI0s09xykYyD58CZTscC6AClzuip7G5LiIB0co/cKiPrEj9jSgZ5lVU7uJ8ZTMW8ecnu8pV8zd6SF9+Pz4223DJg5OqnwT1JD5G+HTfZPebQCry4M5L0oTfbVtTcwGAE/E0i61NprYXjGhwtg8VQWlZ5iCSOTKW0DLEk9OqB29oxK+ewvIB8FMp6eN4pG+HCxsKxhTWHrBsSXMKdKCnqE4Za6hUl6YSzQUkpSziAXUC3Pb653SzG1YnspQrH18b2PCEnyt85cJFiRFOEXdMyqqvRqX7Nh7ld67dKh2sFfpyMnLj5luGIqOSNU3l7mNEb1TNJswFGEkTHRjxcwcRO8tdzIuVQKi7KHdRbAmCV7BUpQ0IZL+I3tntuy//zxGUSX5p3XHaLrsZZ3a60aGYsJeYIlPLU/G3Za9steoJ32ds5eQglGr22oO7K3noLbbnRcqe2+01to1pIMZd2WvqtZ3hOXMY1UDRy3Z1ANm33S9E8YKGQeUaofbghgXJ3YMEgprHoPPXTeMYeMHaMz+Yy/KBVWvlHkCR527lltu+lbnGWvSofSJibLjr1aHit+oqs4YJZLjz8TI5pm7fFzCetCg/6cM1Q/2h+6hynFE3rExjoQhWH3yiqZZjDiKQN42xZEwrLo28SrGG16MAHn7RjhShp/OU/m44spRl5MGkuPmGKZ+A0KeY2pz1tNPC7JJhgN7bYAcRyhvg8/Oj0YZpr5xJec5AkV3jh/8cXJSQjMM06zxhPIc0xlphHv7TXUdXsoDicYZDqx9hPIUU2+sy6vx4tUxWLtDiI3yG9ybZ5jGOHusF+SYShLLUjxePitKcxGEnq6o16CzrEFi0QLDK8eoqKv/WBqRe1xYVXia1uLoe4asZBcYg01J5tIOw3R0k1jL+46MJdS1kXdO9tOZXcrUtOzZNEjOp5GmQ/5FlRSY2mKYYv4jK0V+GU0VK7KGIycO134yDoL9cR8Eh8Rdn2MngpqsYLVMC1BhtWvZHsPU/AWSfEOQhClQIcQYK4quKArGEKqgVL8z4FPO3tCdyu2sLsx/okckn4Sa66yYt8wwtfSXNayVpBpzJrV9hoMrSVcd4bvK9xRFlDDOfyoCwysWY0dFWL079FsAEGGuUoIB7VcShmGK4XwcRwUH8Iicokmxe7H3fOJikIKXSAyvGO6O/gqnXvwhz5QbMpSVGyx/R26HGvsxhIdfvyEaw78w7enedeDG0GSkYKiqqYf4hapCrCBZMza64waXGef8JjonRv30t5uLbAAViWEGezGdBGP3HMbxytk6zip1/24STKaL8kTE+uFyM7BZDwVn+DymfAUfq/u+MRxYySZXYh/DfjG8LoVyYlTJ3OwNw8EgKFS8+sZwYMdazxkOBkelKMZ+MRxY60JRr2cMUz/oKT1nWHQcvWOY5iue3nOGfBdGPxmyK149ZXg9Oxf2nOFgGP46jv4yvDoO3HOGA8tPHUevGQ4Gy0jX+s1wMBj/13eGg4VY2yK++OKLL7744gsh8D9i860SmXpc6wAAAABJRU5ErkJggg=='/>
          </div>
        </div>
      </div>



    </div>
  );
}

export default App;

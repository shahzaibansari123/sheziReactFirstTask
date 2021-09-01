import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import p1 from "./assets/p1.jpg";
import p2 from "./assets/p2.jpg";
import p3 from "./assets/p3.jpg";
import post1 from "./assets/post1.png";
import post2 from "./assets/post2.png";
import post3 from "./assets/post3.jpg";
import like from "./assets/like.png";
import comment from "./assets/comment.png";
import share from "./assets/share.png";

function Hi(props) {
  return <div>
    <div class="container">
      <div class="profilediv">
        <img class="profile" src={props.profile} alt="profile" />
        <h3> {props.name} <br></br> <span class="date">{props.date} </span></h3>
        <br></br>
      </div>
      <p>{props.caption}</p>
      <img class="post" src={props.post} alt="post" />
      <img class="like" src={props.like} alt="likebtn"/>
      <img class="comment" src={props.comment} alt="commentbtn" />
      <img class="share" src={props.share}  alt="sharebtn"/>
    </div>
  </div>;
}

ReactDOM.render(
  <div>
    <Hi profile={p1} name="Shahzaib Ansari" date="30 august 2021" caption="“Creativity is intelligence having fun.” -Albert Einstein" post={post1} like={like} comment={comment} share={share} />
    <Hi profile={p2} name="Khubaib Zuberi" date="31 august 2021" caption="“A picture is a poem without words.” -Horace" post={post2} like={like} comment={comment} share={share} />
    <Hi profile={p3} name="Shareh Akhter" date="01 september 2021" caption="“Art doesn’t have to be pretty. It has to be meaningful.” -Duane Hanson" post={post3} like={like} comment={comment} share={share} />
  </div>, document.querySelector('#root'));
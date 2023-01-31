import Comment from "./Comment";
export default function Comments() {
  return (
    <div id="team" className="mt-16 flex flex-col gap-5 items-center px-5">
      <Comment
        body="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        name="Satish Patel"
        job="Founder & CEO, Huddle"
        profile="../images/profile-1.jpg"
        first
      />
      <Comment
        body="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        name="Bruce McKenzie"
        job="Founder & CEO, Huddle"
        profile="../images/profile-2.jpg"
      />
      <Comment
        body="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        name="Bruce McKenzie"
        job="Founder & CEO, Huddle"
        profile="../images/profile-3.jpg"
      />
    </div>
  );
}

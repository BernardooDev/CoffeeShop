import { Title } from "../Title/Style";
import { CommentsSection, FeedbackComments, NameComments, PeopleComments, PhotoComments, SingleComments, TitleComments } from "./Style";
import useComments from "../../api/useComments";

function Comments() {
    const { data:comments, isLoading } = useComments()

    if (isLoading) return <h1>Loading...</h1>

    return (
        <CommentsSection>
            <TitleComments><Title>Feedbacks!</Title></TitleComments>
            <PeopleComments>
            {comments?.map((comm) =>
                <SingleComments key={comm.id}>
                    <PhotoComments><img src={comm.photo}/></PhotoComments>
                    <NameComments><h1>{comm.name}</h1></NameComments>
                    <FeedbackComments><p>{comm.title}</p></FeedbackComments>
                </SingleComments>
            )}
            </PeopleComments>
        </CommentsSection>
    )
}

export default Comments;
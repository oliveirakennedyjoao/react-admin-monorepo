
import { Create, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export function PostCreate() {
    return (
        <Create>
            <SimpleForm>
                <ReferenceInput source="userId" reference="users" />
                <TextInput source="title" />
                <TextInput source="body" multiline rows={5} />
            </SimpleForm>
        </Create>
    )
}
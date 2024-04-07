import { Input } from '@rneui/base';
import { Text } from '@rneui/base';

import { useField } from 'formik';

export default function FormikInputValue({ name, ...props }) {
    const [field, meta, helpers] = useField(name);
    return (
        <>
            <Input
                labelStyle={{ color: 'white' }}
                onChangeText={(value) => helpers.setValue(value)}
                value={field.value}
                inputStyle={{
                    backgroundColor: 'white',
                }}
                containerStyle={{ width: 300 }}
                {...props}
            />
            {meta.error && (
                <Text
                    style={{
                        color: 'red',
                        marginTop: -25,
                        marginBottom: 20,
                        marginLeft: 10,
                    }}
                >
                    {meta.error}
                </Text>
            )}
        </>
    );
}

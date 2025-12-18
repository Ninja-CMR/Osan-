
import { useForm } from 'vee-validate';
import * as yup from 'yup';

export function useReservation(whatsappNumber = "2376XXXXXXXX") {

    const schema = yup.object({
        name: yup.string().required('Le nom est requis'),
        email: yup.string().email('Email invalide').required('L\'email est requis'),
        phone: yup.string().min(8, 'Numéro trop court').required('Le téléphone est requis'),
        date: yup.string().required('La date est requise'),
        time: yup.string().required('L\'heure est requise'),
        guests: yup.string().required(),
        requests: yup.string().nullable()
    });

    // 2. Initialisation du formulaire
    const { defineField, handleSubmit, errors, resetForm, isSubmitting } = useForm({
        validationSchema: schema,
        initialValues: {
            guests: '2 Guests',
            requests: ''
        }
    });
    const [name, nameProps] = defineField('name');
    const [email, emailProps] = defineField('email');
    const [phone, phoneProps] = defineField('phone');
    const [date, dateProps] = defineField('date');
    const [time, timeProps] = defineField('time');
    const [guests, guestsProps] = defineField('guests');
    const [requests, requestsProps] = defineField('requests');

    const onSubmit = handleSubmit((values) => {
        const message = `*Nouvelle Réservation OSAN*%0A` +
            `---------------------------%0A` +
            `*Nom:* ${values.name}%0A` +
            `*Email:* ${values.email}%0A` +
            `*Tel:* ${values.phone}%0A` +
            `*Date:* ${values.date}%0A` +
            `*Heure:* ${values.time}%0A` +
            `*Couverts:* ${values.guests}%0A` +
            `*Notes:* ${values.requests || 'Aucune'}`;

        const url = `https://wa.me/${whatsappNumber}?text=${message}`;
        window.open(url, '_blank');

    });

    return {
        name, email, phone, date, time, guests, requests,
        errors,
        isSubmitting,
        onSubmit
    };
}
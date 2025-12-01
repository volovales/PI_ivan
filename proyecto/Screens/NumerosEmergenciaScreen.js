import { Text, StyleSheet, View, ScrollView } from 'react-native'

export default function NumerosEmergenciaScreen(){

    const contactosdeEmergencia = [
        {id: 1, titulo: 'Policía / Seguridad', numero: '911', descripcion: 'Reporte inmediato', color: '#FF6B6B'},
        {id: 2, titulo: 'Cruz Roja', numero: '442 229 0505 / 442 229 0669', descripcion: 'Emergencias médicas o ambulancias', color: '#4ECDC4'},
        {id: 3, titulo: 'Protección Civil', numero: '442 309 1430 / 442 217 3712', descripcion: 'Emergencias', color: '#45B7D1'},
        {id: 4, titulo: 'Denuncia Anónima', numero: '089', descripcion: 'Denuncia Anónima', color: '#96CEB4'},
        {id: 5, titulo: 'Bomberos del estado (Central zona centro)', numero: '442 212 3939', descripcion: 'Incendios / rescates', color: '#FF6B6B'},
        {id: 6, titulo: 'Hospital IMSS', numero: '442 211 2300', descripcion:'Atención médica de urgencia', color:'#225515ff'},
        {id: 7, titulo: 'Policía municipal', numero: '442 427 6700', descripcion: 'Seguridad municipal', color: '#1e1464ff'}
    ];

    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Teléfonos de Emergencia</Text>
        </View>

        <ScrollView style={styles.scrollView}>
            <View style={styles.contactsList}>
                {contactosdeEmergencia.map((contact) => (
                    <View key={contact.id} style={[styles.contactContainer, { borderLeftColor: contact.color }]}>
                        <View style={styles.contactContent}>
                            <Text style={styles.contactTitle}>{contact.titulo}</Text>
                            <Text style={styles.contactNumber}>{contact.numero}</Text>
                            <Text style={styles.contactDescription}>{contact.descripcion}</Text>
                        </View>
                    </View>
                ))}
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    En caso de emergencia, marca directamente
                </Text>
            </View>
        </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    header: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 20,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E9ECEF',
        marginTop: 25,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2C3E50',
        textAlign: 'center',
    },
    scrollView: {
        flex: 1,
    },
    contactsList: {
        padding: 16,
    },
    contactContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        borderLeftWidth: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    contactContent: {
        flex: 1,
    },
    contactTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2C3E50',
        marginBottom: 8,
    },
    contactNumber: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#E74C3C',
        marginBottom: 4,
    },
    contactDescription: {
        fontSize: 14,
        color: '#7F8C8D',
        fontStyle: 'italic',
    },
    footer: {
        padding: 16,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 14,
        color: '#7F8C8D',
        textAlign: 'center',
        fontStyle: 'italic',
    },
})

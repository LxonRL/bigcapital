// @ts-nocheck
import printValue from '../printValue';

export const locale = {
    mixed: {
        default: '${path} ist ungültig',
        required: '${path} ist ein Pflichtfeld',
        oneOf: '${path} muss einer der folgenden Werte sein: ${values}',
        notOneOf: '${path} darf nicht einer der folgenden Werte sein: ${values}',
        notType: ({ path, type, value, originalValue }) => {
            let isCast = originalValue != null && originalValue !== value;
            let msg =
                `${path} muss vom Typ \`${type}\` sein, ` +
                `aber der Endwert war: \`${printValue(value, true)}\`` +
                (isCast
                    ? ` (umgewandelt vom Wert \`${printValue(originalValue, true)}\`).`
                    : '.');

            if (value === null) {
                msg += `\n Wenn "null" als leerer Wert beabsichtigt ist, stelle sicher, dass das Schema als \`.nullable()\` markiert ist.`;
            }

            return msg;
        },
        defined: '${path} muss definiert sein',
    },
    string: {
        length: '${path} muss genau ${length} Zeichen lang sein',
        min: '${path} muss mindestens ${min} Zeichen lang sein',
        max: '${path} darf höchstens ${max} Zeichen lang sein',
        matches: '${path} muss dem folgenden Muster entsprechen: "${regex}"',
        email: '${path} muss eine gültige E-Mail-Adresse sein',
        url: '${path} muss eine gültige URL sein',
        trim: '${path} muss ein getrimmter String sein',
        lowercase: '${path} muss ein Kleinbuchstaben-String sein',
        uppercase: '${path} muss ein Großbuchstaben-String sein',
    },
    number: {
        min: '${path} muss größer oder gleich ${min} sein',
        max: '${path} muss kleiner oder gleich ${max} sein',
        lessThan: '${path} muss kleiner als ${less} sein',
        moreThan: '${path} muss größer als ${more} sein',
        notEqual: '${path} darf nicht gleich ${notEqual} sein',
        positive: '${path} muss eine positive Zahl sein',
        negative: '${path} muss eine negative Zahl sein',
        integer: '${path} muss eine ganze Zahl sein',
    },
    date: {
        min: '${path} Feld muss später als ${min} sein',
        max: '${path} Feld muss früher als ${max} sein',
    },
    boolean: {},
    object: {
        noUnknown:
            '${path} Feld kann keine Schlüssel enthalten, die nicht in der Objektstruktur spezifiziert sind',
    },
    array: {
        min: '${path} Feld muss mindestens ${min} Elemente haben',
        max: '${path} Feld darf höchstens ${max} Elemente haben',
    },
};

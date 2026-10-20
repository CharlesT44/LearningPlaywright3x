export default function log (message) {
    console.log ("[LOGS] " +    message);
}

export function logBetter(message) {
    console.log ("___________");
    console.log ("[LOGS]" + message);
    console.log ("_______end___________");
}
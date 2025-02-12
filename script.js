    chatBox.scrollTop = chatBox.scrollHeight; 
}

function getBotResponse(input) {
    input = input.toLowerCase();

    let responses = {
        "oi": "Oi! Como posso ajudar?",
        "olá": "Olá! Como você está?",
        "como você está?": "Estou bem! E você?",
         "qual seu nome?": "Sou um chatbot simples!🤖",
        "obrigado 🤗": "De nada! 😊",
        "tchau": "Até logo! Tenha um bom dia! 😊"
    };

    return responses[input] || "Desculpe, não entendi. Pode reformular?";
}
    "obrigado 🤗": "De nada! 😊",
        "tchau": "Até logo! Tenha um bom dia! 😊"
    };

    return responses[input] || "Desculpe, não entendi. Pode reformular?";
}

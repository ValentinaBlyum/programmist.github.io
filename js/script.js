var button = document.getElementById('magician'), //Кнопка
    nodes = document.body.childNodes; //Все элементы внутри тэга body

button.onclick = function () {    
    var i = 0,
        nodes_total = nodes.length;

    //Перебираем все элементы
    for (i = 0; i<nodes_total; ++i) {    
        //Если комментарий
        if (nodes[i].nodeType === 8) {
            var mark = nodes[i].nodeValue.trim().substr(0, 16), //Метка
                text = nodes[i].nodeValue.trim().substr(16); //Текст без метки
            //Если метка в комментарии найдена
            if (mark === 'JavaScriptText: ') {                    
                alert(text);
            }
        }        
    }
};
// adding new entry


$('#add').on('click', () => {
    let newEntry = {
        day: $('#day').val().trim(),
        skill: $('#skill').val().trim(),
        summary: $('#summary').val().trim(),
        description: $('#description').val().trim(),
        imageURL: $('#imageURL').val().trim(),
        language: $('#language').val().trim()
    }

    console.log('new entry', newEntry);
    
    
    $.ajax({
        method: 'POST',
        url:'/api/newEntry',
        data: newEntry
    }).then((res)=> {console.log('data added',res)})
})

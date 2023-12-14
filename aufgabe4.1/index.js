
app.get('/now', (request, response) => {
    let date = new Date()
    response.send(date.toLocaleString('de-DE', {hour: '2-digit', minute: '2-digit',   hour12: false, timeZone: timeZone }))
  });
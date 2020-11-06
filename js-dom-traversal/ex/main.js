$('.validator').click(function(){
  const generatorText = $(this).closest('.computer').find('.generator').text()
  
  const MB = $(this).closest('.computer').find('.MB').text()

  let qrs = ""
  $(this).closest('.computer').find('.QR').each(function(){
    qrs += $(this).text()
  })


  console.log(`Generator's text: ${generatorText}\nMB: ${MB}\nQRs: ${qrs}`)
})

$('.generator').click(function(){
  const processorId = $(this).closest('.processor').attr('id')
  

  const data = {id: $(this).closest('.computer').data('id')}

  const bus = $(this).closest('.computer').find('.BUS').text()

  console.log(`Processor ID: ${processorId}\nComputer's data-id: ${data}\nBUS: ${bus}`)
})

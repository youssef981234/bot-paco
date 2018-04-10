const Discord = require('discord.js');
const client = new Discord.Client();


client.login(process.env.BOT_TOKEN);

client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === '/join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
  if (message.content === '/leave') {
	if(message.member.voiceChannel){
		message.member.voiceChannel.leave();
	}
	else{
		message.reply('You need to be in the channel to command me faggot');
	}
  }
  if (message.content === '/horn'){
	message.member.voiceChannel.join().then(connection => {
		console.log('playing');
		const dispatcher = connection.playFile('./sounds/airhorn.wav', {volume: '0.5'});
		dispatcher.on('end', () => {
				message.member.voiceChannel.leave();	// The song has finished
		});
	}).catch(err => console.log(err));
  }
  if (message.content === '/nigger'){
	message.member.voiceChannel.join().then(connection => {
		console.log('playing');
		const dispatcher = connection.playFile('./sounds/nigger.mp3', {volume: '0.5'});
		dispatcher.on('end', () => {
				message.member.voiceChannel.leave();	// The song has finished
		});

	}).catch(err => console.log(err));
	
  }
  if (message.content === '/niggrz'){
	message.member.voiceChannel.join().then(connection => {
		console.log('playing');
		const dispatcher = connection.playFile('./sounds/niggers.mp3', {volume: '0.5'});
		dispatcher.on('end', () => {
				message.member.voiceChannel.leave();	// The song has finished
		});

	}).catch(err => console.log(err));
	
  }
   if (message.content === '/jesus'){
	message.member.voiceChannel.join().then(connection => {
		console.log('playing');
		const dispatcher = connection.playFile('./sounds/jesus-christ-kid.mp3', {volume: '0.5'});
		dispatcher.on('end', () => {
				message.member.voiceChannel.leave();	// The song has finished
		});

	}).catch(err => console.log(err));
	
  }
   if (message.content === '/bruh'){
	message.member.voiceChannel.join().then(connection => {
		console.log('playing');
		const dispatcher = connection.playFile('./sounds/bruh.mp3', {volume: '0.1'});
		dispatcher.on('end', () => {
				message.member.voiceChannel.leave();	// The song has finished
		});

	}).catch(err => console.log(err));
	
  }
  if (message.content === '/scream'){
	message.member.voiceChannel.join().then(connection => {
		console.log('playing');
		const dispatcher = connection.playFile('./sounds/youtube.mp3', {volume: '0.1'});
		dispatcher.on('end', () => {
				message.member.voiceChannel.leave();	// The song has finished
		});

	}).catch(err => console.log(err));
	
  }
  if (message.content === '/badumtss'){
	message.member.voiceChannel.join().then(connection => {
		console.log('playing');
		const dispatcher = connection.playFile('./sounds/joke_drum_effect.mp3', {volume: '0.5'});
		dispatcher.on('end', () => {
				message.member.voiceChannel.leave();	// The song has finished
		});

	}).catch(err => console.log(err));
	
  }
  if (message.content === '/leroy'){
	message.member.voiceChannel.join().then(connection => {
		console.log('playing');
		const dispatcher = connection.playFile('./sounds/leroy.swf.mp3', {volume: '0.5'});
		dispatcher.on('end', () => {
				message.member.voiceChannel.leave();	// The song has finished
		});

	}).catch(err => console.log(err));
	
  }
  if (message.content === '/fuckoff'){
	message.member.voiceChannel.join().then(connection => {
		console.log('playing');
		const dispatcher = connection.playFile('./sounds/Fuckoffbaby.mp3', {volume: '1'});
		dispatcher.on('end', () => {
				message.member.voiceChannel.leave();	// The song has finished
		});

	}).catch(err => console.log(err));
	
  }
  if (message.content === '/autism'){
	message.member.voiceChannel.join().then(connection => {
		console.log('playing');
		const dispatcher = connection.playFile('./sounds/fucking-autism.mp3', {volume: '1'});
		dispatcher.on('end', () => {
				message.member.voiceChannel.leave();	// The song has finished
		});

	}).catch(err => console.log(err));
	
  }
	if (message.content === '/gotem'){
	message.member.voiceChannel.join().then(connection => {
		console.log('playing');
		const dispatcher = connection.playFile('./sounds/HA Gotemmm.mp3', {volume: '1'});
		dispatcher.on('end', () => {
				message.member.voiceChannel.leave();	// The song has finished
		});

	}).catch(err => console.log(err));
	
  }
	if (message.content === '/gay'){
	message.member.voiceChannel.join().then(connection => {
		console.log('playing');
		const dispatcher = connection.playFile('./sounds/what-are-you-fucking-gay.mp3', {volume: '1'});
		dispatcher.on('end', () => {
				message.member.voiceChannel.leave();	// The song has finished
		});

	}).catch(err => console.log(err));
	
  }
	if (message.content === '/drama'){
	message.member.voiceChannel.join().then(connection => {
		console.log('playing');
		const dispatcher = connection.playFile('./sounds/drama.swf.mp3', {volume: '1'});
		dispatcher.on('end', () => {
				message.member.voiceChannel.leave();	// The song has finished
		});

	}).catch(err => console.log(err));
	
  }
	if (message.content === '/hey'){
	message.member.voiceChannel.join().then(connection => {
		console.log('playing');
		const dispatcher = connection.playFile('./sounds/hey-thats-pretty-good.mp3', {volume: '1'});
		dispatcher.on('end', () => {
				message.member.voiceChannel.leave();	// The song has finished
		});

	}).catch(err => console.log(err));
	
  }
	if (message.content === '/vjesta'){
	message.member.voiceChannel.join().then(connection => {
		console.log('playing');
		const dispatcher = connection.playFile('./sounds/marta.mp3', {volume: '1'});
		dispatcher.on('end', () => {
				message.member.voiceChannel.leave();	// The song has finished
		});

	}).catch(err => console.log(err));
	
  }
});

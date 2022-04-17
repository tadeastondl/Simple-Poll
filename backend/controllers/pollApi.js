const fs = require("fs");

exports.postPoll = (req, res) => {
  const id = Math.floor(Math.random() * 1000000000000);
  fs.readFile("./res/polls.json", "utf-8", (err, data) => {
    if (err) {
      throw err;
    }

    const polls = JSON.parse(data.toString());
    req.body.poll.id = id;
    polls.push(req.body.poll);

    data = JSON.stringify(polls);

    fs.writeFile("./res/polls.json", data, (err) => {
      if (err) {
        throw err;
      }
    });
  });
  res.status(200).json({
    id,
    url: `${process.env.SERVER_IP}/pollapi/${id}`,
  });
};

exports.getPoll = (req, res) => {
  fs.readFile("./res/polls.json", "utf-8", (err, data) => {
    if (err) {
      throw err;
    }

    const polls = JSON.parse(data.toString());
    const poll = polls.filter((poll) => {
      return poll.id == req.params.id;
    });

    res.json(poll);
  });
};

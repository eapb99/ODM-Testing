const mongoose = require("mongoose");
const { connectDB, dropDB, dropCollections } = require("../../setuptestdb");
const Todo = require("../../models/botsModel");


beforeAll(async () => {
    await connectDB();
  });
   
  afterAll(async () => {
    await dropDB();
  });
   
  afterEach(async () => {
    await dropCollections();
  });

  describe("Todo Model", () => {
    it("should create a todo item successfully", async () => {
        let botData = {
            robotid: "2FBBE9Z1",
            name: "robot-A",
            
          };
      const savedBot = await Todo(botData);
      await savedBot.save();
      expect(savedBot._id).toBeDefined();
      expect(savedBot.robotid).toBe(botData.robotid);
       expect(savedBot.name).toBe(botData.name);
    });
    it("should fail for bot item without required fields", async () => {
        let invalidrobot = {
            name: "robot-abc",
        };
        try {
          const savedBot = new Todo(invalidrobot);
          await savedBot.save();
        } catch (error) {
          expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
          expect(error.errors.completed).toBeDefined();
        }
      });

      it("should fail for bot item with fields of wrong type", async () => {
        let invalidrobot = {
            name: "robot-abc",
            robotid: 212345
        };
        try {
          const savedBot = new Todo(invalidrobot);
          await savedBot.save();
        } catch (error) {
          expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
          expect(error.errors.completed).toBeDefined();
        }
      });
  });
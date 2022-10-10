import { User } from '../models/User.js';

export const getUsers = async (req, res) => {
    const users = await User.find({});

    try{
        res.status(200).json({
            status : 'Success',
            data : {
                users
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
};

export const createUser = async (req, res) => {
    const { firstName, lastName, userName } = req.body;
    const insert = new User({ firstName, lastName, userName});
    
    try{
        const data = await insert.save();

        res.status(201).json({
            status: 'Success',
            data : {
                data
            }
        });
    } catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        });
    }
};

export const deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    
    try{
      res.status(204).json({
          status : 'Success',
          data : {}
      })

      res.redirect('/employees');
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
};

export const updateUser = async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new : true,
        runValidators : true
    });

    try{
        res.status(200).json({
            status : 'Success',
            data : {
                updatedUser
            }
          })
    }catch(err){
        console.log(err)
    }

};
import SlideService from "../services/slide.service.js";

class SlideController {
    constructor() {
        this.slideService = new SlideService()
    }
    async getSlides(req,res) {
        try {
            const slides = await this.slideService.getAll();
            res.status(200).json(slides);
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error.message });
        }
    }
    async getSlideById(req, res) {
        const { id } = req.params;
        try {
            const slide = await this.slideService.getSlide(id);
            res.status(200).json(slide)
        } catch (error){
            console.log(error)
            res.status(500).json({ message: error.message });
        }
    }
    async updateSlideById(req, res) {
        const { id } = req.params;

        try {
            const slide = await this.slideService.updateSlide(id, req.body);
            res.status(200).json(slide)
        } catch (error){
            console.log(error)
            res.status(500).json({ message: error.message });
        }
    }
    async deleteSlideById(req, res){
        const {id} = req.params;
        try {
            const slide = await this.slideService.deleteSlide(id);
            res.status(200).json(slide)
        } catch (error){
            console.log(error)
            res.status(500).json({ message: error.message });
        }
    }
}
export default SlideController
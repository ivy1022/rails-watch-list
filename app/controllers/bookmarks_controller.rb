class BookmarksController < ApplicationController

  def new
    @bookmark = Bookmark.new
    @list = List.find(params[:list_id])
  end

  def create
    par = bookmark_params
    @bookmark = Bookmark.new(bookmark_params)
    @list = List.find_by(id: params[:list_id])
    # @bookmark = Bookmark.new(list_id: @list.id, movie_id: @movie.id)
    @bookmark.list = @list
    if @bookmark.save
      redirect_to list_path(@list)
    else
      render :new
    end
  end

  def destroy
    @bookmark = Bookmark.new(params[:id])
    @bookmark.destroy
    redirect_to list_path(@bookmark.list)
  end

  private

  def bookmark_params
    params.require(:bookmark).permit(:comment, :list_id, :movie)
  end
end
